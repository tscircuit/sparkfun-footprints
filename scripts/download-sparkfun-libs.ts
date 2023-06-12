import download from "download-git-repo";

download(
  "sparkfun/SparkFun-Eagle-Libraries#main",
  "./tmp-sparkfun-repo",
  (err) => {
    if (err) throw err;
    console.log("downloaded");
  }
);
