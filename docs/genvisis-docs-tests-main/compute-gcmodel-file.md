## Compute GCMODEL File

This step computes the guanine (G) and cytosine (C) content around a marker and corrects for it. G and C have three hydrogen bonds, while A and T have two; therefore, many Gs and Cs in a row means that a portion of the double helix is more tightly bound and takes more energy to separate. Regions with many Gs and Cs have properties that are detected downstream, such as how tightly something is hybridizing to it and the degree of intensity (X and Y), and is a problem when the sample is of low quality.

#### 1: Download remotely available GC CBase file

#### 2.1 GCModel output file must be specified
This option requires a file that is relative to the genome build (e.g., **hg18_gc5base.txt**) that should automatically download from the Genvisis website. The file downloads to **.genvisis/resources/Genome/**.

#### 2.2 Overwrite existing file
Select this option if you want to overwrite an existing file.
