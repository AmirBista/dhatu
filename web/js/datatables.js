$(document).ready(function() {
    var BASE_URL = window['BASE_URL'],
    	table = $('#datatable').DataTable({
    	// "pageLength" : 10,
    	sAjaxSource: BASE_URL+'/trade-history/list',
    	columns: [
    		{ "data" : "id", "render": function (data) {
                        return '<input type="checkbox" name='+data+'> ';
                    } 
            },
            { "data" : 'image', "render": function (data) {
                        return "<img src="+"'"+BASE_URL+'filebox/'+data+"'"+">";
                    } 
            },
            { "data" : 'name'},
            { "data" : 'trade_status'},
            { "data" : 'trade_date'},
            { "data" : 'trade_time'},
            { "data" : 'trade_type'},
            { "data" : 'trade_amount'},
    	],
    	'columnDefs': [
		  {
		      "targets": [ 0, 1, 2, 3, 4, 5, 6, 7] ,
		      "className": "text-center"
		 },
		]
    });
    
    // $('#datatable').DataTable();
    
	//hide search box
	$(".dataTables_filter").hide();

	//hide info 
	$(".dataTables_length").hide();

    // $('#main-table').tableDnD({
    //     onDrop: function(table, row) {
    //         alert($.tableDnD.serialize());
    //     },
    // });
    
    // var el = document.getElementById('main-table');
    // if(el!=null){
    //         dragger = tableDragger(el, {
    //            mode: 'row',
    //            onlyBody: true,
    //            animation: 300
    //     });
    // }

	
} );
