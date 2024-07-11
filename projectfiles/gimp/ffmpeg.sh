 #!/usr/bin/env bash

ffmpeg -f image2 -framerate 2.5 -i ./$1/%01d.png -loop 0 -plays 0 -quality 100 ./$1/out.apng
