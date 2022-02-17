cmake_minimum_required(VERSION 3.21)
project(pasmo)

set(CMAKE_CXX_STANDARD 14)

file(GLOB SOURCES "src/*.cpp")

add_executable(pasmo ${SOURCES})
