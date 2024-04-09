const cds = require("@sap/cds");
const { onBeforeEmployeeCreate, onAfterEmployeeCreate } = require("../srv/src/employeeOperations");

module.exports = cds.service.impl(async (srv) => {
    srv.before(["CREATE", "READ"], "Employee", onBeforeEmployeeCreate)
    srv.after("CREATE", "Employee", onAfterEmployeeCreate)
});