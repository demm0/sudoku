module.exports = function solveSudoku(matrix) {
	let m = [];
	for (let i = 0; i < matrix.length; i ++){
		m[i] = [];
		for (let j = 0; j < matrix[i].length; j ++){
			m[i][j] = []; 
			m[i][j][0] = matrix[i][j];
		}
	}
	let matrix_9 = [];			  
	for (i = 0; i < m.length+1; i++){	 
		matrix_9[i]=i;
	}
		
		for (i = 0; i < m.length; i++) {															//search for empty cells
			for (j = 0; j < m[i].length; j++){
				let n = 0;
				for (let k = 1; k < matrix_9.length; k++){
					if (matrix_9[k] == m[i][j]){															//check sudoku cells for numbers
						n++; 
						break;
					}
				}
				if (n == 0) {
					for (k = 1; k < matrix_9.length; k ++){ 
						m[i][j].push (matrix_9[k]);
					}		
				}
			}
		}
	
	function line ( r , t ){																		// function line
	  for (let l = 0; l < m[r].length; l ++){
			for (let s = 1; s < m[r][t].length; s ++){
				if (m[r][t][s] == m[r][l][0]){		
					m[r][t].splice (s,1);
				}
			}
		}
	}	
	
	function inline ( r , t ){																	// function inline
<<<<<<< HEAD
		for (s = 1; s<m[r][t].length; s++){
=======
		for (l = 1; l<m[r][t].length; l++){
>>>>>>> 3ab224a8ccdbc7aa657f8c327045678312ff3128
			let schet = 0;
			for (let l = 0; l < m[r].length; l ++){
				for (let j = 0; j < m[r][l].length; j ++){
					if ((m[r][t][s] == m[r][l][j]) && (t != l)){		
						schet++;
					}
				}
			}
			if (schet == 0) {
				m[r][t] = [m[r][t][s]];
				break;
			}
		}
	}	

	function column ( r , t ){																	// function column
	  for (let l = 0; l < m.length; l ++){
			for (let s = 1; s < m[r][t].length; s ++){
				if (m[r][t][s] == m[l][t][0]){
					m[r][t].splice (s,1);
				}
			}
		}
	}	
	
	function incolumn ( r , t ) {																	// function incolumn
		for (l = 1; l<m[r][t].length; l++){
			let schet = 0;
			for (let i = 0; i < m[r].length; i ++){
				for (let k = 0; k < m[i][t].length; k ++){
					if ((m[r][t][l] == m[i][t][k]) && (i != r)){		
						schet++;
					}
				}
			}
			if (schet == 0) {
				m[r][t] = [m[r][t][l]];
				break;
			}
		}
	}	

	function sector ( r , t ){																	// function sector
	  for (let l = 0; l < m.length; l ++){
			for (let p = 0; p < m[l].length; p ++){
<<<<<<< HEAD
				if ((Math.trunc(r / Math.sqrt(m.length)) == Math.trunc(l / Math.sqrt(m.length))) 
				&& (Math.trunc(t / Math.sqrt(m.length)) == Math.trunc(p / Math.sqrt(m.length)))
				&& (m[l][p][0] != 0)){
					for (let s = 1; s < m[r][t].length; s ++){
						if (m[r][t][s] == m[l][p][0]){
							m[r][t].splice(s,1);
=======
				if ((Math.trunc(r / Math.sqrt(m.length)) == Math.trunc(l / Math.sqrt(m.length))) 
				&& (Math.trunc(t / Math.sqrt(m.length)) == Math.trunc(p / Math.sqrt(m.length)))
				&& ((p != t) && (l != r))
				&& (m[l][p][0] != 0)){
					for (let s = 1; s < m[r][t].length; s ++){
						if (m[r][t][s] == m[l][p][0]){
							m[r][t].splice(s,1);
						}
					}
				}
			}
		}
	}

	function insector ( r , t ){																	// function insector
		for (let l = 1; l < m.length; l++){
			for (let p = 0; p < m[l].length; p ++){
				let schet = 0;	
				if ((Math.trunc(r / Math.sqrt(m.length)) == Math.trunc(l / Math.sqrt(m.length))) 
				&& (Math.trunc(t / Math.sqrt(m.length)) == Math.trunc(p / Math.sqrt(m.length)))
				&& ((p != t) && (l != r))){	
					for (let s = 1; s<m[r][t].length; s++){
						for (let k = 0; k < m[l][p].length; k ++){
							if (m[r][t][s] == m[l][p][k]){		
								schet++;
							}
>>>>>>> 3ab224a8ccdbc7aa657f8c327045678312ff3128
						}
					}
					if (schet == 0) {
						m[r][t] = [m[r][t][l]];
						break;	
					}
				}
			}
		}
	}

	function insector ( r , t ){																	// function insector
		for (let s = 1; s<m[r][t].length; s++){
			let schet = 0;
			for (let l = 1; l < m.length; l++){
				for (let p = 0; p < m[l].length; p ++){
					if ((Math.trunc(r / Math.sqrt(m.length)) == Math.trunc(l / Math.sqrt(m.length))) 
				 	&& (Math.trunc(t / Math.sqrt(m.length)) == Math.trunc(p / Math.sqrt(m.length)))
				 	&& ((l * 10 + p) != (r * 10 + t))){	
						for (let k = 0; k < m[l][p].length; k ++){
							if (m[r][t][s] == m[l][p][k]){		
								schet++;
							}
						}
					}
				}
			}
			if (schet == 0) {
				m[r][t] = [m[r][t][l]];
				break;	
			}
		}					
	}

let x = 1;

	do{	
		let usl = false;
		for (i = 0; i < m.length; i ++){
			for (j = 0; j < m[i].length; j ++){														
				if (m[i][j].length > 2) {
					line (i, j); 
					column (i, j); 
					sector (i, j); 
					inline (i, j);
					incolumn (i, j);
//					insector (i, j); 
					usl = true;
				}
				if (m[i][j].length == 2) {
					m[i][j].splice (0,1);
				}
			}	
		}
		x++;
<<<<<<< HEAD
	}	while (x <= 6);

for (let i = 0; i < m.length; i ++){
	for (let j = 0; j < m[i].length; j ++){
		matrix[i][j] = m[i][j][0]; 
	}
}

return matrix;
=======
	}	while (x <= 5);

return m;
>>>>>>> 3ab224a8ccdbc7aa657f8c327045678312ff3128
  // your solution
}
