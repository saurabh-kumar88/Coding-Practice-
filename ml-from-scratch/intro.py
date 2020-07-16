import sys
import numpy as np
#import matplotlib


print("Python:", sys.version)
print("Numpy:", np.__version__)
#print("Matplotlib:", matplotlib.__version__)

# Neurons

# ____One neuron with four inputs , 4 unique weights and 1 bias___

# inputs = [1, 2, 3, 2.5]
# weights = [0.2, 0.8, -0.5, 1.0]
# bias = 2
# output = inputs[0]*weights[0] + inputs[1]*weights[1] + inputs[2]*weights[2] + inputs[3]*weights[3] + bias
# print(output)



# _____Three neurons with 4 inputs______

inputs = [1, 2, 3, 2.5]

weights1 = [0.2, 0.8, -0.5, 1.0]
weights2 = [0.5, -0.91, 0.26, -0.5]
weights3 = [-0.26, -0.27, 0.17, 0.87]

bias1 = 2
bias2 = 3
bias3 = 0.5


output =[inputs[0]*weights1[0] + inputs[1]*weights1[1] + inputs[2]*weights1[2] + inputs[3]*weights1[3] + bias1,
         inputs[0]*weights2[0] + inputs[1]*weights2[1] + inputs[2]*weights2[2] + inputs[3]*weights2[3] + bias2,
         inputs[0]*weights3[0] + inputs[1]*weights3[1] + inputs[2]*weights3[2] + inputs[3]*weights3[3] + bias3

        ] 


print(output)




"""
   src/checkdep_freetype2.c:3:6: error: #error "FreeType version 2.3 or higher is required. You may set the MPLLOCALFREETYPE environment variable to 1 to let Matplotlib download it."
           \
          ^~~~~
    src/checkdep_freetype2.c:10:10: error: #include expects "FILENAME" or <FILENAME>
     #include FT_FREETYPE_H
              ^~~~~~~~~~~~~
    src/checkdep_freetype2.c:15:9: note: #pragma message: Compiling with FreeType version FREETYPE_MAJOR.FREETYPE_MINOR.FREETYPE_PATCH.
     #pragma message("Compiling with FreeType version " \
             ^~~~~~~
    src/checkdep_freetype2.c:18:4: error: #error "FreeType version 2.3 or higher is required. You may set the MPLLOCALFREETYPE environment variable to 1 to let Matplotlib download it."
       #error "FreeType version 2.3 or higher is required. \
        ^~~~~
    error: command 'i686-linux-gnu-gcc' failed with exit status 1
    ----------------------------------------
ERROR: Command errored out with exit status 1: /home/yking19/virtual/bin/python -u -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/tmp/pip-install-xqxmuqy9/matplotlib/setup.py'"'"'; __file__='"'"'/tmp/pip-install-xqxmuqy9/matplotlib/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' install --record /tmp/pip-record-3c93r1yx/install-record.txt --single-version-externally-managed --compile --install-headers /home/yking19/virtual/include/site/python3.6/matplotlib Check the logs for full command output.
"""

"""
/python3.6/site-packages/numpy/core/include -I/usr/include/python3.6m -I/home/yking19/virtual/include/python3.6m -c src/checkdep_freetype2.c -o build/temp.linux-i686-3.6/src/checkdep_freetype2.o
  src/checkdep_freetype2.c:3:6: error: #error "FreeType version 2.3 or higher is required. You may set the MPLLOCALFREETYPE environment variable to 1 to let Matplotlib download it."
       #error "FreeType version 2.3 or higher is required. \
    
"""