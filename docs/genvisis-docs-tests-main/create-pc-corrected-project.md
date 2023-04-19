## Create PC-Corrected Project

#### 1.1: Generate Principal Components step [generate-pcs] must have been run already or must be selected

#### 1.2 File path (relative to project directory) and filename prefix for principal components correction files

#### 2: Number of principal components for correction

#### 3: Correction Type

#### 4: Sex Chromosome Strategy

#### 5: Number of threads

#### 6: (optional) Create script with steps to process corrected data and call CNVs?

    * This step will create a new Genvisis project where X and Y are transformed based on the nearest genotype cluster using the principal components generated in the previous step. LRR and BAF are then recomputed based on the new X and Y values.
    * The button **Review PCs Plot** will show a scatterplot of Singular Value vs number of Principal Components
        * As the number of PCs increases, the amount of variation in the data they explain falls. This is described by the Singular Value, which decreases with each additional PC added.
    * For a more fine grained examination of the two measures, open the file **[ProjectDir]/PCA/PCA_GENVISIS/PCA_GENVISIS.PCs.SingularValues.txt** in Excel.
        * There are two columns: **PC** and **Singular Value**
        * We want to choose a number of PCs close to the point where adding more leads to diminishing returns. This can be measured by the rate at which the singular value decreases.
        * In a third column, calculate the difference between each singular value and the proceeding value
            * For example =B2-B3
            * The first singular value decrease will usually be in the thousands, followed by the hundreds. Find where the difference consistently falls below 50 and then into the single digits. Highlight a group of 20 to 30 cells, and then under the **Home** tab choose **Conditional Formatting > Color Scales**.
            * For example:

        

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")



        **Image of principal components count and singular values in a Microsoft Excel spreadsheet**

    * Part 1.2 takes the same suffix used in Step 25. Genvisis uses this to identify which files to use when making the new project
    * Part 2 is the number of PCs chosen from examining **SinglarValues.txt**
    * Part 4 Condition Type
        * Put cursor over ? for explanation of each option
        * Use default **XY** if you’re not sure which to use
    * Sex Chromosome Strategy
        * Same as above with ? explaining options
        * Use default **BIOLOGICAL** if not sure
    * This step creates **[ProjectDir]/pcCorrected_#PCs_[correction type]_[sex chr strategy]**
        * Eg. **pcCorrected_20PCs_XY_BIOLOGICAL**
    * This new subdir contains a new Genvisis project with a **/transposed** dir containing the PC corrected samples. This new project will appear in the upper right corner of the Genvisis GUI.
        * You can now run this [new project](#bookmark=id.f9nqogg40tlr) up to cnv calling and optimization a second time.
