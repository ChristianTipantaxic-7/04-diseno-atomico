import { execSync } from 'child_process';

console.log('⚡ Auto-Sync Runner — Semana 08');

try {
  console.log('→ Sincronizando con main del repo docente...');
  execSync('git fetch origin main', { stdio: 'inherit' });
  execSync('git merge origin/main --no-edit --allow-unrelated-histories || true', {
    stdio: 'inherit',
  });
} catch {
  console.warn('⚠ Auto-Sync omitido (posible conflicto o sin conexión).');
}

try {
  console.log('→ Ejecutando suite Vitest completa...');
  execSync('npx vitest run', { stdio: 'inherit' });
  console.log('✅ Todos los tests pasaron.');
} catch {
  console.error('❌ Algunos tests fallaron.');
  process.exit(1);
}
