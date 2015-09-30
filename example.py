#!/usr/bin/python
import pyupm_i2clcd as lcd

myLcd = lcd.Jhd1313m1(0, 0x3e, 0x62)
myLcd.setColor(255, 0, 0)
myLcd.setCursor(0, 0)
myLcd.write("Hello, world")
