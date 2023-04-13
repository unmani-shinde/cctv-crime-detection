import os
import smtplib
import ssl
import datetime
from dateutil import tz
from email.message import EmailMessage
import cv2 as cv
email_sender = 'unmanishinde01@gmail.com'
email_password = 'thee qovl kotc spfm'
email_receiver = 'aish123.ravi@gmail.com'

context = ssl.create_default_context()


# Set the timezone to use for the timestamp
local_tz = tz.tzlocal()

# Get the current timestamp in the local timezone
now = datetime.datetime.now(local_tz)

# Format the timestamp string
timestamp_str = now.strftime('%Y-%m-%d %H:%M:%S %Z')

subject = 'EMERGENCY! ACTION NEEDED ASAP'
body = f"""
This mail is regarding an urgent situation that has arisen. An armed person has been detected in the nearby area at {timestamp_str}.
The situation is urgent and requires prompt action. 
"""


camera = cv.VideoCapture(0) 
haar_cascade = cv.CascadeClassifier(r'C:\Users\sarit\OneDrive\Desktop\KAVACH 2023- IndiSafe\weapons.xml')


em = EmailMessage()
em["From"] = email_sender
em["To"] = email_receiver
em["Subject"] = subject

em.set_content(body)

# img = cv.imread(r'C:\Users\sarit\OneDrive\Desktop\KAVACH 2023- IndiSafe\positive image dataset\ghostgun-03.jpg')
while True:
    ret,frame=camera.read()
    gray= cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
    weapon_rect = haar_cascade.detectMultiScale(gray,scaleFactor=1.1,minNeighbors=20)


    if len(weapon_rect) > 0:
        em = EmailMessage()
        em["From"] = email_sender
        em["To"] = email_receiver
        em["Subject"] = subject
        
        subject = 'EMERGENCY! ACTION NEEDED ASAP'
        body = f"""
        This mail is regarding an urgent situation that has arisen. An armed person has been detected in the nearby area at {timestamp_str}.
        The situation is urgent and requires prompt action. 
        """
        message = f'Subject: {subject}\n\n{body}'
        with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
            smtp.login(email_sender,email_password)
            smtp.sendmail(email_sender,email_receiver,em.as_string())
    
    cv.imshow('Weapon Detection', frame)
    
    if cv.waitKey(1) == ord('q'):
        break

camera.release()
cv.destroyAllWindows()

