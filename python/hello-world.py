#!/usr/bin/python
import pyupm_i2clcd as lcd

# some obscure magic (i2c port and addresses for screen and led)
myLcd = lcd.Jhd1313m1(0, 0x3e, 0x62)
# let's set it bloody red
myLcd.setColor(255, 0, 0)
# and set our cursor to uper left corner
myLcd.setCursor(0, 0)
# and finally, let's write the magic phrase!
myLcd.write("Hello, world")
