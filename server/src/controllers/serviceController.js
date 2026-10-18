import Service from '../models/Service.js';

const services = [
  { slug: 'civil-construction', title: 'Civil Construction', category: 'Construction', icon: 'HardHat', summary: 'Civil construction for industrial, commercial, infrastructure and foundation requirements.', capabilities: ['Site development & earthworks', 'Concrete works', 'Infrastructure & utilities', 'Roads, pavement & external works'] },
  { slug: 'structural-works', title: 'Structural Works', category: 'Construction', icon: 'Building2', summary: 'Steel and reinforced concrete solutions for industrial and commercial facilities.', capabilities: ['Steel structures', 'RC structures', 'Industrial & commercial buildings', 'Structural retrofit & modification'] },
  { slug: 'mep-works', title: 'MEP Works', category: 'Construction', icon: 'Workflow', summary: 'Coordinated mechanical, electrical, plumbing and fire protection systems.', capabilities: ['Mechanical & HVAC', 'Electrical', 'Plumbing & fire fighting', 'Testing & commissioning'] },
  { slug: 'mechanical-works', title: 'Mechanical Works', category: 'Construction', icon: 'Cog', summary: 'Mechanical and piping installation integrated with wider project delivery.', capabilities: ['Mechanical installation', 'Piping engineering & installation', 'Equipment installation', 'System checks'] },
  { slug: 'prefabricated-buildings', title: 'Prefabricated Buildings', category: 'Construction', icon: 'Warehouse', summary: 'Prefabricated solutions for modular offices, camps and industrial facilities.', capabilities: ['Modular offices', 'Workforce camps', 'Industrial facilities', 'Building integration'] },
  { slug: 'frp-grp-solutions', title: 'FRP / GRP Solutions', category: 'Specialized', icon: 'Droplets', summary: 'End-to-end FRP/GRP solutions from engineering and fabrication to installation, testing and maintenance.', capabilities: ['Storage tanks, process vessels & piping', 'Gratings, platforms, ladders & supports', 'Chemical-resistant linings & protective coatings', 'Repairs, modifications & field maintenance'] },
  { slug: 'warehouse-construction', title: 'Warehouse Construction', category: 'Specialized', icon: 'Warehouse', summary: 'Turnkey construction, extension, refurbishment and maintenance for industrial and commercial warehouses.', capabilities: ['Civil & site works', 'Structural steel & cladding', 'Doors, access & architectural works', 'MEP & mechanical integration'] },
  { slug: 'concrete-repair', title: 'Concrete Repair', category: 'Specialized', icon: 'Hammer', summary: 'Concrete crack repair, surface repair, waterproofing, painting and epoxy painting works.', capabilities: ['Crack repair by injection', 'Crack and surface repair', 'Waterproofing work', 'Painting & epoxy painting'] },
  { slug: 'fencing-works', title: 'Fencing Works', category: 'Specialized', icon: 'Fence', summary: 'End-to-end perimeter and security fencing solutions for industrial, commercial, residential and infrastructure projects.', capabilities: ['Fencing supply & fabrication', 'Installation', 'Related civil works', 'Maintenance'] },
  { slug: 'industrial-maintenance', title: 'Industrial Maintenance', category: 'Specialized', icon: 'Settings', summary: 'Maintenance and specialist services that support industrial equipment, systems and facilities.', capabilities: ['Tank & vessel cleaning (manual, semi-automatic, automatic)', 'Hydro testing for tanks, vessels, boilers & pipelines', 'Preventive & corrective maintenance', 'Hydro jetting, pipeline pigging & plant shutdown / turnaround maintenance'] },
  { slug: 'manpower-supply', title: 'Manpower Supply', category: 'Support', icon: 'Users', summary: 'Skilled and general project-ready workforce support.', capabilities: ['Skilled engineers and technicians', 'Supervisors', 'General labor and helpers', 'Reliable, trained, project-ready personnel'] },
  { slug: 'equipment-rental', title: 'Equipment Rental & Leasing', category: 'Support', icon: 'Truck', summary: 'Rental and leasing support across construction, heavy machinery and other equipment needs.', capabilities: ['Construction & heavy machinery', 'Light construction, access & lifting equipment', 'Landscaping, agricultural, event and transport equipment', 'Medical, office, industrial, utility, power & safety equipment'] },
  { slug: 'procurement', title: 'Procurement & Supply Chain', category: 'Support', icon: 'Package', summary: 'Material sourcing and supply chain coordination with quality assurance and timely delivery.', capabilities: ['Construction materials', 'Electrical, plumbing, HVAC & mechanical materials', 'Safety equipment, tools, electronics & finishing materials', 'Industrial valves for oil and gas-related works'] },
  { slug: 'camp-accommodation', title: 'Camp, Food & Accommodation', category: 'Support', icon: 'House', summary: 'Camp setup, accommodation, catering and dining services for project workforces.', capabilities: ['Camp setup & management', 'Accommodation solutions', 'Catering & dining facilities', 'Hygiene & safety standards'] },
];

export async function getServices(_req, res, next) {
  try {
    const data = Service.db.readyState === 1 ? await Service.find({ active: true }).sort({ title: 1 }).lean() : services;
    return res.json(data);
  } catch (error) { return next(error); }
}

export async function getService(req, res, next) {
  try {
    const service = Service.db.readyState === 1 ? await Service.findOne({ slug: req.params.slug, active: true }).lean() : services.find(item => item.slug === req.params.slug);
    if (!service) return res.status(404).json({ message: 'Service not found.' });
    return res.json(service);
  } catch (error) { return next(error); }
}
