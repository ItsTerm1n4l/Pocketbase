package main

import (
    "fmt"
    "os"
)
func main() {
  fmt.
b, err := os.ReadFile("content.html")
 str := string(b)
 fmt.Println(str)
}
