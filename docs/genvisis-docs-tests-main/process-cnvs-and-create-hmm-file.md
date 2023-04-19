### Process CNVs and Create HMM File
    * _Option 2.2 Input file with high-quality CNV calls must exist_
        * Default is **cnvs\filtered.cnv**
    * _Option 3 Filter input CNV file using default filters_ uses the default filter criteria from the **Filter CNVs** step. This option isn’t necessary if using **filtered.cnv**.
    * _Option 4 Number of high-quality samples to use_ defines the number of samples to use in the training algorithm that generates the new .hmm parameters.
        * The more samples used, the more fine tuned the parameters are to the dataset and the more accurate CNV calls with these parameters will be.
        * However, the more samples used, the more memory is required by the training algorithm
        * 900GB of memory is recommended for training on 100 samples in order to not receive an out of memory error.
