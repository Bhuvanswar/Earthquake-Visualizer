import PropTypes from 'prop-types';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-[80vh]" role="status" aria-label="Loading earthquake data">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

LoadingSpinner.propTypes = {};