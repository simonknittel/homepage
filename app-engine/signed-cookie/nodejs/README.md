# signed-cookie for App Engine

```shell
gcloud app deploy --promote
# Make sure to delete the old version via https://console.cloud.google.com/appengine/versions?serviceId=default
gcloud app services update default --ingress internal-and-cloud-load-balancing

gcloud compute network-endpoint-groups create signed-cookie-app-engine-serverless-network-endpoint-group \
  --network-endpoint-type=serverless \
  --app-engine-app \
  --app-engine-service=default \
  --region=europe-west3
```
