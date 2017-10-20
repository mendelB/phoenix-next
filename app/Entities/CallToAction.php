<?php

namespace App\Entities;

use JsonSerializable;

class CallToAction extends Entity implements JsonSerializable
{
    public function jsonSerialize()
    {
        // dd($this);

        return [
            'id' => $this->entry->getId(),
            'type' => $this->getContentType(),
            'fields' => [
                'content' => $this->content,
                'displayOptions' =>$this->displayOptions->first(),
                'impactPrefix' => $this->impactPrefix ?: null,
                'impactSuffix' => $this->impactSuffix ?: null,
                'impactValue' => $this->impactValue ?: null,
            ],
        ];
    }
}
