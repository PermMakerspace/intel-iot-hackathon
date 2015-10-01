#!/usr/bin/python

import urllib2
import pyupm_i2clcd as lcd

myLcd = lcd.Jhd1313m1(0, 0x3e, 0x62)

# magical message!
#print urllib2.urlopen('http://placekitten.com/').read()[520:1051]

myLcd.write(urllib2.urlopen('http://placekitten.com/').read()[521:557])

