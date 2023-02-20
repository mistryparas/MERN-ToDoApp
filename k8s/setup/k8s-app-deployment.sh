#!/bin/bash

### Create
kubectl create -f database-pv.yaml
kubectl create -f database-pvc.yaml
kubectl create -f database-deployment.yaml
kubectl create -f database-service.yaml

kubectl create -f backend-env-configmap.yaml
kubectl create -f backend-deployment.yaml
kubectl create -f backend-service.yaml

kubectl create -f frontend-deployment.yaml
kubectl create -f frontend-service.yaml

### Apply
kubectl apply -f database-pv.yaml
kubectl apply -f database-pvc.yaml
kubectl apply -f database-deployment.yaml
kubectl apply -f database-service.yaml

kubectl apply -f backend-env-configmap.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

# kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
# cd kubernetes-ingress/deployments
# kubectl apply -f common/ns-and-sa.yaml
# kubectl apply -f common/nginx-config.yaml
# kubectl apply -f rbac/rbac.yaml
# kubectl apply -f daemon-set/nginx-ingress.yaml
# kubectl get pods --namespace=nginx-ingress
# kubectl describe -n nginx-ingress pod <ingress-pod>
# kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx
# kubectl delete all --all -n nginx-ingress
