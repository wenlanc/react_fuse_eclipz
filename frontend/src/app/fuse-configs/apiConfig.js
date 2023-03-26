export const rootUrl = '';  //  3.17.68.228 ,http://localhost:5001, admin.xpresstrust.com https://localhost:5000

export const statuses = [
	{
		id: 1,
		label: 'Active',
		value:'A',
		color: 'bg-blue text-white'
	},
	// {
	// 	id: 2,
	// 	label: 'Deleted',
	// 	value:'D',
	// 	color: 'bg-red text-white'
	// },
	{
		id: 3,
		label: 'Suspended',  // Suspended or temporarily disabled
		value: 'S',
		color: 'bg-orange text-black'
	}
];

export const roles = [
	{
		id: 1,
		label: 'Admin',
		value:'A',
		color: 'bg-blue text-white'
	},
	{
		id: 2,
		label: 'Superadmin',
		value:'P',
		color: 'bg-red text-white'
	},
	{
		id: 3,
		label: 'User',  
		value: 'U',
		color: 'bg-orange text-black'
	},
    {
		id: 4,
		label: 'Service',  
		value: 'S',
		color: 'bg-pink text-white'
	}
];