const s3 = require('s3');
const config = require('./aws.json');

const client = s3.createClient({
  s3Options: {
    //region: config.region,
    region: config.region['kwandy'],
    sslEnabled: true,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
  },
});
const uploader = client.uploadDir({
  localDir: 'build',
  deleteRemoved: true,
  s3Params: {
    Bucket: config.bucket['kwandy'],
    ACL: 'public-read',
  },
});

uploader.on('error', function(err) {
  console.error("unable to sync:", err.stack);
});
uploader.on('progress', function() {
  console.log("Region:", config.region);
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
  console.log("done uploading");
});
