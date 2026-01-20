Node.js Architecture
Node.js is a runtime environment that allows JavaScript to run outside the browser. It is built to handle asynchronous, non-blocking operations, making it highly efficient for scalable applications like APIs and real-time systems.

JavaScript Engine (V8)
V8 is Google’s high-performance JavaScript engine

Written in C++

Converts JavaScript code into machine code

Executes JavaScript very fast

Node.js uses V8 to run JavaScript on the server

Node.js Core APIs
Built-in APIs provided by Node.js

Examples:

fs (file system)

http (create servers)

path

events

These APIs expose system-level functionality to JavaScript

They internally rely on native bindings and libuv

Native Bindings
Native bindings connect JavaScript code with C/C++ code

Act as a bridge between:

JavaScript (V8)

Low-level system operations

Used when JavaScript alone is not enough (file I/O, networking)

Event Loop
The heart of Node.js

Manages execution of asynchronous callbacks

Allows Node.js to perform non-blocking operations

Continuously checks queues and executes callbacks when ready

Runs in a single main thread

libuv
What is libuv?
A C library used by Node.js

Provides support for:

Asynchronous I/O

Event loop

Thread pool

Works across different operating systems

Why Node.js needs libuv
JavaScript is single-threaded

OS-level tasks like file I/O and networking are blocking

libuv makes these operations asynchronous

Ensures Node.js stays fast and responsive

Responsibilities of libuv
Manages the event loop

Handles non-blocking I/O

Manages the thread pool

Handles timers, sockets, DNS, and file system operations

Thread Pool
What is a thread pool?
A set of background worker threads

Default size: 4 threads

Used for heavy or blocking tasks

Why Node.js uses a thread pool
To avoid blocking the main event loop

Some operations cannot be done asynchronously by the OS

Thread pool helps offload such tasks

Operations handled by the thread pool
File system operations (fs)

DNS lookup

Compression (zlib)

Cryptographic functions

Worker Threads
What are worker threads?
Separate JavaScript threads introduced in Node.js

Each worker has its own event loop and memory

Used for CPU-intensive tasks

Why are worker threads needed?
Node.js main thread should stay responsive

CPU-heavy tasks can block the event loop

Worker threads run such tasks in parallel

