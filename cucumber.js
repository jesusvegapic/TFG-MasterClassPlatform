const common = [
    '--require-module ts-node/register' // Load TypeScript module
  ];
  
  const mooc_backend = [
    ...common,
    'tests/apps/Mooc/backend/features/**/*.feature',
    '--require tests/apps/Mooc/backend/features/step_definitions/*.steps.ts'
  ].join(' ');
  
  module.exports = {
    mooc_backend
  };