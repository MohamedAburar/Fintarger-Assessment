How to run this in your local server?

1) Clone the repository to your PC (or) Computer.
2) Open the coding in Visual studio (or) any other apps.
3) Install all dependencies.
4) Run the server.
5) Open the Postman applicaton.
6) Change the HTTP to POST and set this url http://localhost:3000/api/v1/task.
7) Set the Header
   Key Content-Type
    and Value application/json.
8) In Body change to Raw and make sure it's in JSON.
   Give the value for Location,Nature_of_business,Manufactruing_processes.
   Example: 
   {
     "user_id" : "123"
   }