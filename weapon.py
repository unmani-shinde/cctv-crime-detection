import cv2
import datetime
import numpy as np

cap = cv2.VideoCapture(0)

# Load Yolo
net = cv2.dnn.readNet("yolov5s.pt", "data/images")
classes = []
with open("data/coco128.yaml", "r") as f:
    classes = [line.strip() for line in f.readlines()]
layer_names = net.getLayerNames()
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
colors = np.random.uniform(0, 255, size=(len(classes), 3))

# Create a file to save the detections
detections_file = open("detections.txt", "w")

while True:
    _, frame = cap.read()
    height, width, channels = frame.shape

    # Detect objects
    blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
    net.setInput(blob)
    outs = net.forward(output_layers)

    # Save detections with location and timestamp
    now = datetime.datetime.now()
    detections = []
    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]
            if confidence > 0.5:
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)
                detections.append({"class": classes[class_id], "confidence": confidence, "x": x, "y": y})
    detections_file.write("{} {}\n".format(now, detections))

    # Display detections on the web page
    # ...
