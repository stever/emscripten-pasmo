#[[
cmake_minimum_required(VERSION 3.0.0)

set(CMAKE_C_FLAGS "-Wall")

set(CMAKE_C_FLAGS_DEBUG "${CMAKE_C_FLAGS_DEBUG} -O0")
set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS_RELEASE} -O2")

file(GLOB SOURCES "src/*.cpp")

add_executable(pasmo ${SOURCES})
]]

cmake_minimum_required(VERSION 3.21)
project(pasmo)

set(CMAKE_CXX_STANDARD 14)

file(GLOB SOURCES "src/*.cpp")

add_executable(pasmo ${SOURCES})

target_compile_definitions(pasmo PUBLIC VERSION="\"0.5.4.beta2\""})
