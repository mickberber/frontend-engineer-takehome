## Hot Schedules Front End Software Engineer Takehome project
![Alt text](./hotschedules.png 'Hot Schedules logo')


#About
This take home project is designed to give us an idea of how you code. It is designed to be a more representative example of the work you would be doing than a traditional, white boarding technical interview. It is therefore designed to be a lower stress alternative to other interviewing techniques.

There are three parts to the exercise, however all three parts build on each other. It should not take more than 2-3 hours to complete. If you think that the requirements will take significantly longer than that, please give that feedback.

#To Start

Fork and clone the repo.
`git clone https://github.com/YOUR_USER_NAME/frontend-engineer-takehome.git`
`cd frontend-engineer-takehome`

The repository will contain:

- index.html
- SalesTransactions.json
- transform.factory.js
- visualize.directive.js
- main.css
- visualize.data.tpl.html


#Step 1
In transform.factory.js, complete the given Angular Factory by writing a function or functions that are capable of taking SalesTransactions.json data as an input.

From this function(s) return:
- the total net_sales for the entire collection of data
- the average net sales per guest for each unique employee

The format of the returned data is up to you.

#Step 2
In `visualize.directive.js`, create an angular directive that uses your transformation factory to:
- display the average net sales per guest for each employee in a separate div.
- Div's should be given a background color
- Div width should be determined by the calculated metric

The raw SalesTransactions are available in the parent controller scope.
First you should pass this raw data into your directive, then inside the directive, call your factory to transform the data. For example, if employee 1's net sales per guest is $10 and employee 2's net sales per guest is $15 dollars, employee 2s div should be wider. The exact proportions are up to you.

#Quick Start Server
The easiest way to test the app is to install the http-server package:
- `npm install -g http-server`
 and then run:
- `http-server`
inside of the project directory.

#Contact Us
If you have any concerns or feedback about the requirements, please don't hesitate to reach out to your interviewer.
