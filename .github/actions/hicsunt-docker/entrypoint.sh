#!/bin/sh -l

echo "Hic Sunt $1"
time=$(date)
echo "::set-output name=time::$time"