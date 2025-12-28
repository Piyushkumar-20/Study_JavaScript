/* 
fetch() global function
The global fetch() method start the process of fetching resource from the network,
returning a promise which is fullfilled once the response is available.        

A fetch() promise only rejects when a network error is encountered(which) is usually when there's a permission issue or similar)
A fetch() promise does not reject on HTTp error(404, etc). Instead a then() handler must check the Response.ok and/or Response.status properties
*/

