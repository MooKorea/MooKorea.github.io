## Run Marker BLAST Annotation (Illumina)

BLAST (Basic Local Alignment Search Tool) determines if markers are useful by aligning the probe sequences to the genome. A marker is not useful if it aligns to multiple locations on a genome.

BLAST will run on the marker positions in markerPositions.txt.

#### 1: Parse Sample Files step [parse-samples] must have been run already or must be selected
This step uses the sampRAF files that were created in the Parse Sample Files step.

#### 2: Word size (length of the smallest continuous match reported)
[1-100, default 40; number of base pairs?; talk to John Lane]
Smaller word size-->more time to run
Markers are 50 bp in length
Checking is subunits of the marker have matches in the sample genome?

#### 3: Full path to an Illumina manifest file (e.g., HumanExome-12-v1-o-B.csv)
You must provide a manifest with probe sequences.

#### 4: (optional) Marker positions file to override MarkerSet positions with (e.g. for a different genome build) (e.g. markerPositions.txt)
Use this option if you want to BLAST on a different genome build than that of your project. For example, if the project was created in hg37 and the positions in *markerPositions.txt* are hg37, you can provide an alternative markerPositions file with positions in hg38 for this part.

#### 5: Number of threads

#### 6: Download remotely available BLAST program requirement
Genvisis will download this program automatically when you check the Run Marker BLAST Annotation step. [VERIFY WITH ROSE]
