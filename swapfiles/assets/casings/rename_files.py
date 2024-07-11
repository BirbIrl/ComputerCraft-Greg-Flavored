#!/usr/bin/env python3

#short python script that will take in any greg tech resource pack and rename it's casings to a format closer to my resource pack! If you don't understand this - don't run this script! i'm not responsible for any data you might lose :P -Birb

import shutil
import os
import sys



dr = sys.argv[1]

for root, dirs, files in os.walk(dr):
    for f in files:
        if f == "side.png":
            shutil.move(root+"/"+f, root+"/../"+root.split("/")[-1]+f[:-8]+"_case_pattern"+".png")
        if f == "top.png":
            shutil.move(root+"/"+f, root+"/../"+root.split("/")[-1]+f[:-7]+"_case"+".png")
        if f == "side.png.mcmeta":
            shutil.move(root+"/"+f, root+"/../"+root.split("/")[-1]+f[:-(8+7)]+"_case_pattern"+".png.mcmeta")
        if f == "top.png.mcmeta":
            shutil.move(root+"/"+f, root+"/../"+root.split("/")[-1]+f[:-(7+7)]+"_case"+".png.mcmeta")

