const config = {};
config["API_URL"] = "http://localhost:8080/api";
if (process.env.NODE_ENV.toLowerCase() === "production")
{
    config["API_URL"] = "https://devstacktutor.com/api";
}

export default config;