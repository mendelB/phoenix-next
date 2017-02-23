<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Composer\Console\Application as Composer;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;

class DependencyCheckServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $output = $this->getComposerInstallOutput();
        $parsedOutput = $this->parseComposerStatus($output);

        if ($parsedOutput['should_update']) {
            $summary = $parsedOutput['summary'];

            if ('cli' === PHP_SAPI) {
                throw new \InvalidArgumentException('Composer update required: ' . $summary);
            } else {
                $markup = '<div style="color: #fff; font-family: sans-serif; background: black; padding: 16px 32px;">';
                $markup .= '<strong>⚠️ Hey, your Composer dependencies are out of date!</strong> ';
                $markup .= '<span style="color: gray;">' . $summary . '</span>';
                $markup .= '</div>';

                echo $markup;
            }
        }
    }

    /**
     * Parse the composer output.
     *
     * @param $output
     * @return array
     */
    protected function parseComposerStatus($output) {
        $shouldUpdate = ! str_contains($output, 'Nothing to install or update');

        preg_match('/Package operations: ([0-9*] install, [0-9*] updates, [0-9*] removals)/', $output, $summary);

        return [
            'should_update' => $shouldUpdate,
            'summary' => ! empty($summary[1]) ? $summary[1] : 'Nothing to install or update',
        ];
    }

    /**
     * Run the `composer install --dry-run` command to check status.
     *
     * @return string
     */
    protected function getComposerInstallOutput()
    {
        putenv('COMPOSER_HOME=' . base_path('vendor/bin/composer'));
        $cwd = getcwd();
        chdir(base_path());

        $application = new Composer();
        $application->setAutoExit(false);

        $input = new ArrayInput(['command' => 'install', '--dry-run' => true, '--no-plugins' => true]);
        $output = new BufferedOutput();

        $application->run($input, $output);
        chdir($cwd);

        return $output->fetch();
    }
}
