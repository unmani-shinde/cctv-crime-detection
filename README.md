
## To perform the object detection :

### Step- 1] 
Open your terminal and run ```git clone https://github.com/unmani-shinde/cctv-crime-detection``` .This command will clone the repository

### Step- 2] 
```cd cctv-crime-detection``` and then switch to dev-kshitij branch by ```git checkout dev-kshitij```

### Step- 3] 
- To perform the default 80 classes detection run ```python detect.py --source 0 --weights yolov5s.pt --source 0```
- To perform the exclusive pistol class trained model run ```python detect.py --weights /runs/train/exp5/weights/best.pt --source 0```

Both of these runs will result in a window of your webcam(in my case it is ```source 0```) and objects will get detected.

Make sure you write the ```--source "_" ``` and ```--weights "path" ``` correctly

### Step- 4]
```ctrl+c``` in your terminal to terminate the execution
