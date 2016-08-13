(function() {
    function factory() {
        function generateColor(id) {
          var color = '#' + id.toString();
          while(color.length <= 6) {
            color = color + 'f';
          }
          return color;
        }

        //takes in avgrage sales, transforms it into a value that is usable for display width
        function calcWidth(avg) {
          var str = Math.floor(avg/10).toString();
          return str + 'px';
        }

        function transformData(data) {
          var netTotal = 0;
          var employeeData = {};
          //use one function to iterate only one time over response data
          //reducing time complexity of overall operations on response data
          data.forEach(function(transaction) {
            //not an employee transaction
            if(transaction.sys_type_version === 14) {
              return;
            }
            //keep running net total value
            netTotal = transaction.net_total.value + netTotal;


            var numGuests = transaction.guest_count;
            var transTotal = transaction.net_total.value;
            var id = transaction.employee.id;

            //get transaction average per customer by dividing transaction total by number of guests
            var perCust = Math.floor(transTotal/numGuests);

            //if we come across a new employee id, we will initiate a new employee object
            //inside of employeeData
            if(employeeData[id] === undefined) {
              employeeData[id] = { id: id, average: perCust, color: generateColor(id), width: calcWidth(perCust) };
            } else {
              //otherwise, we will recalculate the average, and width of our
              //employee object
              employeeData[id].average = Math.floor((employeeData[id].average + perCust)/2);
              employeeData[id].width = calcWidth(employeeData[id].average);
            }

          })

          return {
            netTotal: netTotal,
            employeeData: employeeData
          }
        }

        return {
          transformData: transformData
        };
    }

    angular.module('takeHomeApp').factory('transformFactory', factory)
})();
