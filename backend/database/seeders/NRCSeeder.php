<?php

namespace Database\Seeders;

use App\Models\NRC;
use Illuminate\Database\Seeder;

class NRCSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nrcFile = resource_path() . '/nrcs.json';
        if (file_exists($nrcFile)) {
            $data = json_decode(file_get_contents($nrcFile), true);
            foreach ($data['data'] as $nrc) {
                $townshipMM = str_replace(')', '', str_replace('(', '', explode(' ', $nrc['name_mm'])[0]));
                \Log::debug($townshipMM);
                NRC::create([
                    'nrc_code' => $nrc['nrc_code'],
                    'township_mm' => $townshipMM,
                    'township_en' => $nrc['name_en']
                ]);
            }
        }
    }
}
