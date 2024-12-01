import { Material } from '../types';

interface MaterialCardProps {
  material: Material;
}

export default function MaterialCard({ material }: MaterialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {material.name}
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Thickness:</span>
          <span className="font-medium text-gray-900">{material.thickness.imperial}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Cut Speed:</span>
          <span className="font-medium text-gray-900">{material.cutSpeed.wazerPro.imperial}</span>
        </div>
        {material.notes && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">{material.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
} 