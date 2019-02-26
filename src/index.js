module.exports = function solveSudoku(matrix) {
  	let matrix_9 = [0,1,2,3,4,5,6,7,8,9];			  
	let m = [[[],[],[],[],[],[],[],[],[]],
			 [[],[],[],[],[],[],[],[],[]],
			 [[],[],[],[],[],[],[],[],[]],
			 [[],[],[],[],[],[],[],[],[]],
			 [[],[],[],[],[],[],[],[],[]],
			 [[],[],[],[],[],[],[],[],[]],
			 [[],[],[],[],[],[],[],[],[]],
			 [[],[],[],[],[],[],[],[],[]],
			 [[],[],[],[],[],[],[],[],[]]];	
	for (let i = 0; i < matrix.length; i++) 												//search for empty cells
	 for (let j = 0; j < matrix[i].length; j++){
	  let n = 0;
	  for (let k = 1; k < matrix_9.length; k++)
	   if (matrix_9[k] == matrix[i][j]){													//check sudoku cells for numbers
	    n++; break;
	   }
	  if (n == 0) 
	   for (k = 0; k < matrix_9.length; k++) m[i][j].push(matrix_9[k]);						//writing to an empty cell of numbers 0...9
	   else m[i][j].push(matrix[i][j]);
	  }
	function line(r,t){																		// function line
	  for (let l=0; l<m[r].length; l++)
	   for (let s = 1; s<m[r][t].length; s++)
		if (m[r][t][s]==m[r][l][0]){
		m[r][t].splice (s,1);
		}
	}	
	function column(r,t){																	// function column
	  for (let l=0; l<m.length; l++)
	   for (let s = 1; s<m[r][t].length; s++)
		if (m[r][t][s]==m[l][t][0]){ 
		 m[r][t].splice (s,1);
		 }
	}	
	function sector(r,t){																	// function sector
	  for (let l=0; l<m[r].length; l++)
	   for (let p=0; p<m.length; p++)
	    if ((Math.trunc(r/3)==Math.trunc(l/3)) && (Math.trunc(t/3)==Math.trunc(p/3)))
	    for (let s = 1; s<m[r][t].length; s++)
		 if (m[r][t][s]==m[l][p][0]){
		 m[r][t].splice (s,1);
		 }
	}
	for (i=0; i<m.length; i++)																// for line
	for (j=0; j<m[i].length; j++){														
      if(m[i][j].length > 2) line(i, j);
	  if(m[i][j].length == 2) m[i][j].splice (0,1);
	 }	
	for (i=0; i<m.length; i++) 																// for column
	 for (j=0; j<m[i].length; j++){														
	  if(m[i][j].length > 2) column(i, j);
	  if(m[i][j].length == 2) m[i][j].splice (0,1);
	  }
	for (i=0; i<m.length; i++) 																// for sector
	 for (j=0; j<m[i].length; j++){														
	  if(m[i][j].length > 2) sector(i, j);
	  if(m[i][j].length == 2) m[i][j].splice (0,1);
	  }
	for (let i=0; i<m.length; i++) 															//Sudoku solution
	 for (let j=0; j<m[i].length; j++)
	  matrix[i][j] = m[i][j][0];
    return (matrix);
	}
  // your solution
}
