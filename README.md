# Missing Content-Length Header in Node.js HTTP Response

This repository demonstrates a common but easily overlooked error in Node.js HTTP servers:  the omission of the `Content-Length` header in the response.  This can lead to issues with clients that rely on this header to properly handle the response, potentially causing incomplete or delayed downloads.

The `bug.js` file shows the problematic code. The `bugSolution.js` provides the corrected version.

## Bug
The bug lies in the simplicity of the response handling in `bug.js`. It sends a response but doesn't specify the length of the content.