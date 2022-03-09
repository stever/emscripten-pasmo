cmake_minimum_required(VERSION 3.0.0)
project(pasmo)

set(CMAKE_CXX_STANDARD 14)

set(CMAKE_CXX_FLAGS "-Wall")

if (EMSCRIPTEN)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --pre-js ../src/pre.js --post-js ../src/post.js -s MODULARIZE=1 -s SINGLE_FILE=1 -s ENVIRONMENT='web'")
endif()

set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_C_FLAGS_DEBUG} -O0")
set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_C_FLAGS_RELEASE} -O2")

file(GLOB SOURCES "src/*.cxx")

add_executable(pasmo ${SOURCES})
