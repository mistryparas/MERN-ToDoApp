const supertest = require("supertest");
const app = require("./http_server");
const request = supertest(app);
var generate = require("fake-todos");
var items = generate(1);

var server = app.listen(8081, function () {
    console.log("Running on port 8081");
  });

const createTodo = async () => {
  const res = await services.createTodo(items[0].what);
  console.log(res.data);
};

// create todos
const todo1 = createTodo();
const todo2 = createTodo();
const todo3 = createTodo();

it("populate data", async (done) => {
  await request.post("/create").send(todo1);
  await request.post("/create").send(todo2);
  await request.post("/create").send(todo3);
  done();
});

it("verify data", async (done) => {
  const data = await request.get("/read");
  expect(data.body.some((e) => e.todo === todo1.todo)).toBeTruthy();
  expect(data.body.some((e) => e.todo === todo2.todo)).toBeTruthy();
  expect(data.body.some((e) => e.todo === todo3.todo)).toBeTruthy();
  done();
});

afterAll((done) => {
  server.close();
  done();
});
