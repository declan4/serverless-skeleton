export function getLatLonDistance(lat1, lon1, lat2, lon2) {
	var R = 6371 // Radius of the earth in km
	var dLat = deg2rad(lat2 - lat1)
	var dLon = deg2rad(lon2 - lon1) 

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2)
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

	var d = R * c // Distance in km

	return d
}

/*
t1 - timestamp of first date
t2 - timestamp of second date
*/
export function monthDifference(t1, t2) {
	let d1 = new Date(t1)
	let d2 = new Date(t2)
    
    var months

    months = (d2.getFullYear() - d1.getFullYear()) * 12
    months -= d1.getMonth()
    months += d2.getMonth()

    return months <= 0 ? 0 : months
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}

