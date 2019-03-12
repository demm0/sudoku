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
	
	function line(r,t){																		// function line
	  for (let l = 0; l < m[r].length; l ++){
			for (let s = 1; s < m[r][t].length; s ++){
				if (m[r][t][s] == m[r][l][0]){		
					m[r][t].splice (s,1);
				}
			}
		}
	}	
	
	function inline(r,t){																	// function inline
		for (l = 1; l<m[r][t].length; l++){
			let schet = 0;
			for (let i = 0; i < m[r].length; i ++){
				for (let j = 0; j < m[r][i].length; j ++){
					if ((m[r][t][l] == m[r][i][j]) && (t != i)){		
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

	function column(r,t){																	// function column
	  for (let l = 0; l < m.length; l ++){
			for (let s = 1; s < m[r][t].length; s ++){
				if (m[r][t][s] == m[l][t][0]){
					m[r][t].splice (s,1);
				}
			}
		}
	}	
	
	function incolumn(r,t){																	// function incolumn
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
				m[r][t] = m[r][t][l];
				break;
			}
		}
	}	


	function sector(r,t){																	// function sector
	  for (let l = 0; l < m[r].length; l ++){
			for (let p = 0; p < m.length; p ++){
				if ((Math.trunc(r / Math.sqrt(m.length)) == Math.trunc(l / Math.sqrt(m.length))) 
				&& (Math.trunc(t / Math.sqrt(m.length)) == Math.trunc(p / Math.sqrt(m.length)))
				&& ((p != t) && (l != t))){
					for (let s = 1; s<m[r][t].length; s++){
						if (m[r][t][s]==m[l][p][0]){
							m[r][t].splice (s,1);
						}
					}
				}
			}
		}
	}

let x = 1;

	do{	
		let usl = false;
		for (i = 0; i < m.length; i ++){																// for line
			for (j = 0; j < m[i].length; j ++){														
				if (m[i][j].length > 2) {
					line(i, j); 
					usl = true;
				}
				if (m[i][j].length == 2) {
					m[i][j].splice (0,1);
				}
			}	
		}
		
		for (i = 0; i < m.length; i ++) {																// for column
			for (j = 0; j <m [i].length; j ++){														
				if (m[i][j].length > 2) 		{
					column(i, j); 
					usl = true;
				}
				if (m[i][j].length == 2) {
					m[i][j].splice (0,1);
				}
			}
		}
	
		for (i = 0; i < m.length; i ++){ 																// for sector
			for (j = 0; j < matrix[i].length; j ++){														
				if (m[i][j].length > 2) {
					sector(i, j); 
					usl = true;
				}
				if (m[i][j].length == 2) {
					m[i][j].splice (0,1);
				}
			}
		}

		for (i = 0; i < m.length; i ++){																// for inline
			for (j = 0; j < m[i].length; j ++){														
				if (m[i][j].length > 2) {
					inline(i, j); 
					usl = true;
				}
				if (m[i][j].length == 2) {
					m[i][j].splice (0,1);
				}
			}	
		}

		for (i = 0; i < m.length; i ++){																// for incolumn
			for (j = 0; j < m[i].length; j ++){														
				if (m[i][j].length > 2) {
					incolumn(i, j); 
					usl = true;
				}
				if (m[i][j].length == 2) {
					m[i][j].splice (0,1);
				}
			}	
		}

		x++;
	}	while (x <= 25);

return m;
  // your solution
}
