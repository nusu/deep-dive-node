let data = [
	{
		"name": "Redux Video",
		"length": "7:75"
	},
	{
		"name": "React Video",
		"length": "3:35"
	},
	{
		"name": "Redux Video",
		"length": "1:10"
	},
	{
		"name": "React Video",
		"length": "10:00"
	}
]

const filtered = data
	// sadece name'i react video olanları geri döndür
	.filter(data => data.name == "React Video")
	// buraya sadece name'i react video olanlar geldi
	// bunların süresini milisaniye cinsinden hesapla
	.map(data => {
		// uzunluğu al, dakikaları saniyeleri ayır
		// işlem yapabilmek için değerleri Number'a çevir
		// toplam süreyi hesapla ve geri döndür.
		let length = data.length.split(":").map(time => Number(time));
		
		return length[0] * 60 + length[1];
	})
	// süreleri topla
	.reduce((data, num) => data + num);

console.log(filtered);