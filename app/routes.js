const hello = (data, cb) => {
  console.log("Income request \n path: %s,\n method: %s,\n query params: ",
    data.path, data.method, data.queryParams,
    ",\n headers: ", data.headers,
    ",\n body", data.body);
  cb(200, {
    message: "Hello from nodeJS",
    work: "Homework #1"
  })
};

const notFound = (data, cb) => {
  cb(404, {message: "Not found route"})
};


module.exports = {
  notFound,
  hello
};