## Run Marker BLAST Annotation (Affymetrix)

BLAST (Basic Local Alignment Search Tool) determines if markers are useful by aligning the probe sequences to the genome. A marker is not useful if it aligns to multiple locations on a genome.

BLAST will run on the marker positions in markerPositions.txt.

#### 1: Transpose Marker Files to Samples Files step [reverse-transpose] must have been run already or must be selected

#### 2: Word size (length of the smallest continuous match reported)

#### 3: An Affymetrix Probe Set file
You must provide a manifest with probe sequences. The default file, **GenomeWideSNP_6.probe_tab**, can be found at https://www.affymetrix.com/support/technical/byproduct.affx?product=genomewidesnp_6

#### 4: An Affymetrix Annotation file
The default file is **.genvisis/resources/Arrays/AffySnp6/GenomeWideSNP_6.na35.annot.csv**.


#### 5: (optional) Marker positions file to override MarkerSet positions with (e.g. for a different genome build) (e.g. markerPositions.txt)
Use this option if you want to BLAST on a different genome build than that of your project. For example, if the project was created in hg37 and the positions in markerPositions.txt are hg37, you can provide an alternative markerPositions file with positions in **hg38** for this part.

#### 6: Number of threads

#### 7: Download remotely available BLAST program requirement
