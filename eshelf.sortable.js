// Note: jquery.tablesorter.min.js is not being served from github in this code but from another free service host that provides the git files for
//     hotlink purposes. There is no real guarantee that this host will remain online. It is recommended to download tablesorter from the creator's
//     github: https://github.com/christianbach/tablesorter and host the file locally. This code will allow any PRIMO customer to copy this javascript
//     code into a document.ready footer paragraph and this is why this approach was used.

// I did not want to run this code unless there is at least one item in the e-shelf
if ( $("#itemsList_id > table > tbody > tr").length ) {
	$.getScript("https://cdn.rawgit.com/christianbach/tablesorter/master/jquery.tablesorter.min.js", function () {

		// Changing the height of the div to auto because of css weirdness when moving the table header row
		$("#itemsList_id").height("auto");

		// The header is in a separate table so adding that table's class directly to the header row
		$("#tableBorder_id > table > tbody > tr").addClass("itemsListTH");

		// Adding a thead to the itemsList table so sorting works properly
		$("<thead></thead>").appendTo("#itemsList_id > table");

		// This moves the header row into the table with the items
		$("#tableBorder_id > table > tbody > tr").prependTo('#itemsList_id > table > thead');

		// This activates sorting while disabling unnecessary columns
		$("#itemsList_id > table").tablesorter({ 
			headers: { 
				0: { 
					sorter: false }, // disable the checkbox column
				5: { 
					sorter: false }, // disable the comment image column
				6: {
					sorter: false // disable the empty column
				}
			}
		});
	});
};
