 #!/usr/bin/env bash

ffmpeg -f image2 -framerate 2.5 -i ./$1/%01d.png -loop 0 -plays 0 -quality 100 ./$1/out.apng
ffmpeg -i ./$1/out.apng -filter:v fps=30 -c:v prores_ks -profile:v 5  -bits_per_mb 8000 -pix_fmt yuva444p10le ./$1/out.mov
