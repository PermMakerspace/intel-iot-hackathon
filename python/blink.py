import mraa #calls the MRAA library
import time #calls the time library

#Setup - Allows to choose the pin 13 (Built-in LED) as an output.

x = mraa.Gpio(4)
x.dir(mraa.DIR_OUT)

#Process - The process is going to change the state of the pin every second

try:
	print "It's blinking"
	while True:
		x.write(1)
		time.sleep(1)  #Maintain the status of the pin for a second
		x.write(0)
		time.sleep(1)
except KeyboardInterrupt:
        print ""
