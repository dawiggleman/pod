README: devices

    This directory will be used to hold all of our
    device-specific drivers. This will most likely
    contain the functions that add a layer of abstraction 
    between our hardware drivers and our main loop/DAQ.

    These files should include all sending/receiving/parsing
    functionality associated with particular devices. This will
    allow our code to remain clean and readable without having
    to worry about the concrete steps of communicating with a 
    device.
