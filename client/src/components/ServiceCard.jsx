import { useLocalization } from "../i18n/Locale.jsx";
import { ArrowUpRight, Building2, Cog, Droplets, Fence, HardHat, Hammer, House, Package, Settings, Truck, Users, Warehouse, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
const icons = {
  HardHat,
  Building2,
  Workflow,
  Cog,
  Warehouse,
  Droplets,
  Hammer,
  Fence,
  Settings,
  Users,
  Truck,
  Package,
  House
};
export default function ServiceCard({
  service,
  index = 0
}) {
  const localize = useLocalization();
  const Icon = icons[service.icon] || Cog;
  return localize(<Link className="service-card" to={`/services/${service.slug}`}><div className="service-image" style={{
      backgroundImage: `url(https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=900&q=82)`
    }} role="img" aria-label={`${service.title} project`}><span className="service-index">{String(index + 1).padStart(2, '0')}</span><span className="service-icon"><Icon size={21} strokeWidth={1.7} /></span></div><div className="service-card-copy"><span className="eyebrow">{service.category}</span><h3>{service.title}</h3><p>{service.summary}</p><span className="service-link">Explore service <ArrowUpRight size={17} /></span></div></Link>);
}
