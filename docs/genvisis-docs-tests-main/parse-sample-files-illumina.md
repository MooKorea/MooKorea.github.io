## Parse Sample Files (Illumina)
This step converts the .csv report files into a native format for Genvisis.

#### 1.1: Marker Position file must already exist
[GOING TO GET RID OF THIS STEP??? or maybe it's already been removed???]

#### 1.2: Create Marker Positions step [illumina-markers] must have been run already or must be selected
This step uses the file created in Create Marker Positions.

#### 2: (optional) Sample name override file containing the following two columns: CurrentID, DesiredID
Use this option to change the IDs from those IDs in your report files. For example, if your report files contain the sentrix IDs, you can use this option to convert these to the study IDs in the sampRAF files.

#### 3: Number of threads
Genvisis can run on only one node but it is multithreaded. More threads --> faster but also requires more memory (so balancing act between time and memory).
