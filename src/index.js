module.exports = function solveSudoku(matrix) {
	
	let m = [];
	let usl;
	
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
					usl ++;
				}
			}
		}
	}	
	
	function inline ( r , t ){																	// function inline
		for (s = 1; s<m[r][t].length; s++){
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
				usl ++;
				break;
			}
		}
	}	

	function column ( r , t ){																	// function column
	  for (let l = 0; l < m.length; l ++){
			for (let s = 1; s < m[r][t].length; s ++){
				if (m[r][t][s] == m[l][t][0]){
					m[r][t].splice (s,1);
					usl ++;
				}
			}
		}
	}	
	
	function incolumn ( r , t ) {																	// function incolumn
		for (s = 1; s < m[r][t].length; s ++){
			let schet = 0;
			for (let i = 0; i < m[r].length; i ++){
				for (let k = 0; k < m[i][t].length; k ++){
					if ((m[r][t][s] == m[i][t][k]) && (i != r)){		
						schet ++;
					}
				}
			}
			if (schet == 0) {
				m[r][t] = [m[r][t][s]];
				usl ++;
				break;
			}
		}
	}	

	function sector ( r , t ){																	// function sector
	  for (let l = 0; l < m.length; l ++){
			for (let p = 0; p < m[l].length; p ++){
				if ((Math.trunc(r / Math.sqrt(m.length)) == Math.trunc(l / Math.sqrt(m.length))) 
				&& (Math.trunc(t / Math.sqrt(m.length)) == Math.trunc(p / Math.sqrt(m.length)))
				&& (m[l][p][0] != 0)){
					for (let s = 1; s < m[r][t].length; s ++){
						if (m[r][t][s] == m[l][p][0]){
							m[r][t].splice(s,1);
							usl ++;
						}
					}
				}
			}
		}
	}

	function insector ( r , t ){																	// function insector
		for (let s = 1; s < m[r][t].length; s ++){
			let schet = 0;
			for (let l = 0; l < m.length; l++){
				for (let p = 0; p < m[l].length; p ++){
					if ((Math.trunc(r / Math.sqrt(m.length)) == Math.trunc(l / Math.sqrt(m.length))) 
				 	&& (Math.trunc(t / Math.sqrt(m.length)) == Math.trunc(p / Math.sqrt(m.length)))
//					  ((l * 10 + p) != (r * 10 + t))
					 ){	
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
				usl ++;
				break;	
			}
		}					
	}
	let usl2 = 0;
	do{	
		usl2 = 0;
	do{	
		usl = 0;
		for (i = 0; i < m.length; i ++){
			for (j = 0; j < m[i].length; j ++){														
				if (m[i][j].length > 2) {
					line (i, j); 
					column (i, j); 
					sector (i, j); 
					inline (i, j);
					incolumn (i, j);
					insector (i, j); 
				}
				if (m[i][j].length == 2) {
					m[i][j].splice (0,1);
				}
			}	
		}

	}	while (usl != 0);
	for (let i = 0; i < m.length; i ++) {
		for (let j = 0; j < m[i].length; j ++){
			if (m[i][j].length > 2) {
				prom = m[i][j][1];
				m[i][j] = [];
				m[i][j].push(prom);
				usl2 ++;
				usl = 0;
				break;
			}
		}
		if (usl2 != 0){
			break;
		}
	}
} while (usl2 != 0)

	for (let i = 0; i < m.length; i ++){
		for (let j = 0; j < m[i].length; j ++){
			matrix[i][j] = m[i][j][0]; 
		}
	}
	return matrix;
  // your solution
}
